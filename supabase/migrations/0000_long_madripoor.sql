CREATE TABLE IF NOT EXISTS "profile" (
	"id" uuid,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"created_at" timestamp,
	"updated_at" timestamp,
	CONSTRAINT "profile_email_unique" UNIQUE("email")
);

ALTER TABLE "profile" ENABLE ROW LEVEL SECURITY;