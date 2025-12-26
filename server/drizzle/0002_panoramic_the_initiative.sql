CREATE TABLE `admin_table` (
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `admin_table_email` PRIMARY KEY(`email`)
);
--> statement-breakpoint
ALTER TABLE `messages_table` ADD `created_at` timestamp DEFAULT (now()) NOT NULL;