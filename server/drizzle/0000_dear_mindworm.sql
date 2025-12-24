CREATE TABLE `messages_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`message` varchar(1000) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`read` boolean NOT NULL DEFAULT false,
	CONSTRAINT `messages_table_id` PRIMARY KEY(`id`)
);
