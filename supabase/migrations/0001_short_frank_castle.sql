ALTER TABLE "profile" RENAME COLUMN "name" TO "first_name";--> statement-breakpoint
ALTER TABLE "profile" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "profile" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "profile" ADD COLUMN "last_name" text NOT NULL;