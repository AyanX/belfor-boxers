import { useState, useEffect, useCallback, useMemo, memo } from "react";
import "./Messages.scss";
import AppHeader from "../Utils/AppHeader";
import axios from "axios";

const MESSAGES_PER_PAGE = 3;

const MessageRow = memo(
  ({ message, isExpanded, onToggleExpand, onMarkAsRead, onDelete }) => {
    const getInitials = (name) => {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMs = now - date;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      if (diffInDays === 0) {
        return `Today, ${date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`;
      } else if (diffInDays === 1) {
        return `Yesterday, ${date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}`;
      } else {
        return date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
      }
    };
  


    return (
      <>
        <div
          className={`message-row ${isExpanded ? "expanded" : ""}`}
          onClick={() => onToggleExpand(message.id)}
        >
          <div className="message-cell status-cell">
            <span
              className={`status-badge ${message.read ? "read" : "unread"}`}
            >
              {message.read ? "Read" : "Unread"}
            </span>
          </div>
          <div className="message-cell sender-cell">
            <div className="sender-avatar">{getInitials(message.name)}</div>
            <span className="sender-name">{message.name}</span>
          </div>
          <div className="message-cell subject-cell">{message.subject}</div>
          <div className="message-cell date-cell">
            {formatDate(message.createdAt)}
          </div>
          <div
            className="message-cell actions-cell"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="action-btn eye-btn"
              onClick={() => onMarkAsRead(message.id)}
              disabled={message.read}
              aria-label="Mark as read"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <button
              className="action-btn delete-btn"
              onClick={() => onDelete(message.id)}
              aria-label="Delete message"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="message-content-row">
            <div className="message-content">
              <div className="content-header">
                <h3>{message.subject}</h3>
                <span className="content-email">{message.email}</span>
              </div>
              <p className="content-text">{message.message}</p>
            </div>
          </div>
        )}
      </>
    );
  }
);

MessageRow.displayName = "MessageRow";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const API = process.env.API_BASE_URL || "http://localhost:5000";

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/messages`);
      const allMessages = response.data; 

      let filtered = allMessages;
      if (filter === "unread") {
        filtered = allMessages.filter(
          (msg) => msg.read === false || msg.read === 0
        );
      } else if (filter === "read") {
        filtered = allMessages.filter(
          (msg) => msg.read === true || msg.read === 1
        );
      }

      const startIndex = (currentPage - 1) * MESSAGES_PER_PAGE;
      const endIndex = startIndex + MESSAGES_PER_PAGE;
      const paginatedData = filtered.slice(startIndex, endIndex);

      setMessages(paginatedData);
      setTotalCount(filtered.length); // Total count of the FILTERED items
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  }, [filter, currentPage, API]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const handleMarkAsRead = useCallback(
    async (messageId) => {
      try {
        await axios.post(`${API}/messages/read/${messageId}`, {
          read: true,
        });

        setMessages((prevMessages) =>
          prevMessages.map((msg) =>
            msg.id === messageId ? { ...msg, read: true } : msg
          )
        );
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    },
    [API]
  );

  const handleDelete = useCallback(
    async (messageId) => {
      try {
        // 1. Send the DELETE request to your local server
        // We pass the ID in the URL path (Standard REST practice)
        await axios.post(`${API}/messages/delete/${messageId}`);

        // 2. Re-fetch the updated list from the server
        // Since your backend returns the "whole array", this will refresh the UI
        await fetchMessages();
      } catch (error) {
        console.error("Error deleting message:", error);
        // You could add an alert here to warn the user if the delete failed
      }
    },
    [fetchMessages, API]
  );

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(totalCount / MESSAGES_PER_PAGE),
    [totalCount]
  );

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrevious = useCallback(() => {
    if (canGoPrevious) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [canGoPrevious]);

  const handleNext = useCallback(() => {
    if (canGoNext) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [canGoNext]);

  const handleToggleExpand = useCallback(
    (messageId) => {
      setExpandedId(expandedId === messageId ? null : messageId);
    },
    [expandedId]
  );

  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  return (
    <div className="messages-container">
      <div className="messages-header">
        <AppHeader title="MESSAGES"/>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All Messages
          </button>
          <button
            className={`filter-btn ${filter === "unread" ? "active" : ""}`}
            onClick={() => handleFilterChange("unread")}
          >
            Unread
          </button>
          <button
            className={`filter-btn ${filter === "read" ? "active" : ""}`}
            onClick={() => handleFilterChange("read")}
          >
            Read
          </button>
        </div>
      </div>

      <div className="messages-table">
        <div className="table-header">
          <div className="header-cell status-cell">STATUS</div>
          <div className="header-cell sender-cell">SENDER</div>
          <div className="header-cell subject-cell">SUBJECT</div>
          <div className="header-cell date-cell">DATE</div>
          <div className="header-cell actions-cell">ACTIONS</div>
        </div>

        {loading ? (
          <div className="loading-state">Loading messages...</div>
        ) : messages.length === 0 ? (
          <div className="empty-state">No messages found</div>
        ) : (
          <div className="table-body">
            {messages.map((message) => (
              <MessageRow
                key={message.id}
                message={message}
                isExpanded={expandedId === message.id}
                onToggleExpand={handleToggleExpand}
                onMarkAsRead={handleMarkAsRead}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <div className="messages-footer">
        <div className="pagination-info">
          Showing{" "}
          {messages.length > 0 ? (currentPage - 1) * MESSAGES_PER_PAGE + 1 : 0}{" "}
          - {Math.min(currentPage * MESSAGES_PER_PAGE, totalCount)} of{" "}
          {totalCount} messages
        </div>
        <div className="pagination-controls">
          <button
            className="pagination-btn prev-btn"
            onClick={handlePrevious}
            disabled={!canGoPrevious}
          >
            Prev
          </button>
          <div className="page-numbers">
            {pageNumbers.map((pageNum) => (
              <button
                key={pageNum}
                className={`page-btn ${
                  pageNum === currentPage ? "active" : ""
                }`}
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </button>
            ))}
          </div>
          <button
            className="pagination-btn next-btn"
            onClick={handleNext}
            disabled={!canGoNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
