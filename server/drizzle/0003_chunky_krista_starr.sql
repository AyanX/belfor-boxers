CREATE TABLE `academy_settings` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`year_founded` int DEFAULT 2018,
	`pro_members` int DEFAULT 0,
	`location` varchar(255),
	`training_hours` json,
	CONSTRAINT `academy_settings_id` PRIMARY KEY(`id`)
);
