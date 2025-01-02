CREATE TABLE "recipe" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(21) NOT NULL,
	"description" text,
	"subname" varchar(50),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT "recipe_name_unique" UNIQUE("name")
);
