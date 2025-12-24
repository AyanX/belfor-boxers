CREATE TABLE `contacts_table` (
	`email` varchar(255) NOT NULL,
	`phone` varchar(20) NOT NULL,
	CONSTRAINT `contacts_table_email` PRIMARY KEY(`email`)
);
--> statement-breakpoint
CREATE TABLE `prices_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`1v1` varchar(50) NOT NULL,
	`group` varchar(50) NOT NULL,
	`small_group` varchar(50) NOT NULL,
	CONSTRAINT `prices_table_id` PRIMARY KEY(`id`)
);
