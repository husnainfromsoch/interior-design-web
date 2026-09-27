import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_published_locale" AS ENUM('en', 'ru');
  CREATE TYPE "public"."enum_navigation_header_service_groups_services" AS ENUM('interior-design', 'landscape-design', 'villa-renovation', 'apartment-renovation', 'commercial-fit-out', 'bespoke-joinery', 'custom-kitchens', 'wardrobes', 'approvals', 'mep-hvac', 'materials-procurement');
  CREATE TYPE "public"."enum_navigation_header_specialist_services" AS ENUM('interior-design', 'landscape-design', 'villa-renovation', 'apartment-renovation', 'commercial-fit-out', 'bespoke-joinery', 'custom-kitchens', 'wardrobes', 'approvals', 'mep-hvac', 'materials-procurement');
  CREATE TYPE "public"."enum_navigation_header_links_route" AS ENUM('/', '/services', '/projects', '/process', '/about', '/insights', '/contact', '/warranty', '/privacy', '/cookies', '/services/interior-design', '/services/landscape-design', '/services/villa-renovation', '/services/apartment-renovation', '/services/commercial-fit-out', '/services/bespoke-joinery', '/services/custom-kitchens', '/services/wardrobes', '/services/approvals', '/services/mep-hvac', '/services/materials-procurement', '/projects/coastal-villa-concept', '/projects/garden-villa-concept', '/projects/tower-residence-concept', '/projects/business-district-office-concept');
  CREATE TYPE "public"."enum_navigation_footer_explore_links_route" AS ENUM('/', '/services', '/projects', '/process', '/about', '/insights', '/contact', '/warranty', '/privacy', '/cookies', '/services/interior-design', '/services/landscape-design', '/services/villa-renovation', '/services/apartment-renovation', '/services/commercial-fit-out', '/services/bespoke-joinery', '/services/custom-kitchens', '/services/wardrobes', '/services/approvals', '/services/mep-hvac', '/services/materials-procurement', '/projects/coastal-villa-concept', '/projects/garden-villa-concept', '/projects/tower-residence-concept', '/projects/business-district-office-concept');
  CREATE TYPE "public"."enum_navigation_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__navigation_v_version_header_service_groups_services" AS ENUM('interior-design', 'landscape-design', 'villa-renovation', 'apartment-renovation', 'commercial-fit-out', 'bespoke-joinery', 'custom-kitchens', 'wardrobes', 'approvals', 'mep-hvac', 'materials-procurement');
  CREATE TYPE "public"."enum__navigation_v_version_header_specialist_services" AS ENUM('interior-design', 'landscape-design', 'villa-renovation', 'apartment-renovation', 'commercial-fit-out', 'bespoke-joinery', 'custom-kitchens', 'wardrobes', 'approvals', 'mep-hvac', 'materials-procurement');
  CREATE TYPE "public"."enum__navigation_v_version_header_links_route" AS ENUM('/', '/services', '/projects', '/process', '/about', '/insights', '/contact', '/warranty', '/privacy', '/cookies', '/services/interior-design', '/services/landscape-design', '/services/villa-renovation', '/services/apartment-renovation', '/services/commercial-fit-out', '/services/bespoke-joinery', '/services/custom-kitchens', '/services/wardrobes', '/services/approvals', '/services/mep-hvac', '/services/materials-procurement', '/projects/coastal-villa-concept', '/projects/garden-villa-concept', '/projects/tower-residence-concept', '/projects/business-district-office-concept');
  CREATE TYPE "public"."enum__navigation_v_version_footer_explore_links_route" AS ENUM('/', '/services', '/projects', '/process', '/about', '/insights', '/contact', '/warranty', '/privacy', '/cookies', '/services/interior-design', '/services/landscape-design', '/services/villa-renovation', '/services/apartment-renovation', '/services/commercial-fit-out', '/services/bespoke-joinery', '/services/custom-kitchens', '/services/wardrobes', '/services/approvals', '/services/mep-hvac', '/services/materials-procurement', '/projects/coastal-villa-concept', '/projects/garden-villa-concept', '/projects/tower-residence-concept', '/projects/business-district-office-concept');
  CREATE TYPE "public"."enum__navigation_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__navigation_v_published_locale" AS ENUM('en', 'ru');
  ALTER TYPE "public"."enum_users_role" ADD VALUE 'developer';
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_phone_display" varchar,
  	"contact_phone_e164" varchar,
  	"contact_whatsapp_number" varchar,
  	"contact_email" varchar,
  	"legal_entity_name" varchar,
  	"legal_licence_number" varchar,
  	"legal_issuing_authority" varchar,
  	"legal_registered_address" varchar,
  	"privacy_contact_email" varchar,
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"contact_working_hours" varchar,
  	"contact_visits_line" varchar,
  	"legal_activities" varchar,
  	"privacy_providers" varchar,
  	"privacy_retention" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_contact_phone_display" varchar,
  	"version_contact_phone_e164" varchar,
  	"version_contact_whatsapp_number" varchar,
  	"version_contact_email" varchar,
  	"version_legal_entity_name" varchar,
  	"version_legal_licence_number" varchar,
  	"version_legal_issuing_authority" varchar,
  	"version_legal_registered_address" varchar,
  	"version_privacy_contact_email" varchar,
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__site_settings_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_site_settings_v_locales" (
  	"version_contact_working_hours" varchar,
  	"version_contact_visits_line" varchar,
  	"version_legal_activities" varchar,
  	"version_privacy_providers" varchar,
  	"version_privacy_retention" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "navigation_header_service_groups_services" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_navigation_header_service_groups_services",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "navigation_header_service_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "navigation_header_service_groups_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_header_specialist_services" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_navigation_header_specialist_services",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "navigation_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"route" "enum_navigation_header_links_route"
  );
  
  CREATE TABLE "navigation_header_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_footer_explore_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"route" "enum_navigation_footer_explore_links_route"
  );
  
  CREATE TABLE "navigation_footer_explore_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_status" "enum_navigation_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "navigation_locales" (
  	"header_services_label" varchar,
  	"header_specialist_label" varchar,
  	"header_all_services_label" varchar,
  	"header_cta_label" varchar,
  	"footer_explore_heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_header_service_groups_services" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__navigation_v_version_header_service_groups_services",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_header_service_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_header_service_groups_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_header_specialist_services" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__navigation_v_version_header_specialist_services",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"route" "enum__navigation_v_version_header_links_route",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_header_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v_version_footer_explore_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"route" "enum__navigation_v_version_footer_explore_links_route",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_navigation_v_version_footer_explore_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_navigation_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version__status" "enum__navigation_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__navigation_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_navigation_v_locales" (
  	"version_header_services_label" varchar,
  	"version_header_specialist_label" varchar,
  	"version_header_all_services_label" varchar,
  	"version_header_cta_label" varchar,
  	"version_footer_explore_heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_locales" ADD CONSTRAINT "_site_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_service_groups_services" ADD CONSTRAINT "navigation_header_service_groups_services_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."navigation_header_service_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_service_groups" ADD CONSTRAINT "navigation_header_service_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_service_groups_locales" ADD CONSTRAINT "navigation_header_service_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_header_service_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_specialist_services" ADD CONSTRAINT "navigation_header_specialist_services_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_links" ADD CONSTRAINT "navigation_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_links_locales" ADD CONSTRAINT "navigation_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_header_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_explore_links" ADD CONSTRAINT "navigation_footer_explore_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_explore_links_locales" ADD CONSTRAINT "navigation_footer_explore_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_footer_explore_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_locales" ADD CONSTRAINT "navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_service_groups_services" ADD CONSTRAINT "_navigation_v_version_header_service_groups_services_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_navigation_v_version_header_service_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_service_groups" ADD CONSTRAINT "_navigation_v_version_header_service_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_service_groups_locales" ADD CONSTRAINT "_navigation_v_version_header_service_groups_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_header_service_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_specialist_services" ADD CONSTRAINT "_navigation_v_version_header_specialist_services_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_links" ADD CONSTRAINT "_navigation_v_version_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_header_links_locales" ADD CONSTRAINT "_navigation_v_version_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_header_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_footer_explore_links" ADD CONSTRAINT "_navigation_v_version_footer_explore_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_version_footer_explore_links_locales" ADD CONSTRAINT "_navigation_v_version_footer_explore_links_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v_version_footer_explore_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_navigation_v_locales" ADD CONSTRAINT "_navigation_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_navigation_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_snapshot_idx" ON "_site_settings_v" USING btree ("snapshot");
  CREATE INDEX "_site_settings_v_published_locale_idx" ON "_site_settings_v" USING btree ("published_locale");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_site_settings_v_locales_locale_parent_id_unique" ON "_site_settings_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_header_service_groups_services_order_idx" ON "navigation_header_service_groups_services" USING btree ("order");
  CREATE INDEX "navigation_header_service_groups_services_parent_idx" ON "navigation_header_service_groups_services" USING btree ("parent_id");
  CREATE INDEX "navigation_header_service_groups_order_idx" ON "navigation_header_service_groups" USING btree ("_order");
  CREATE INDEX "navigation_header_service_groups_parent_id_idx" ON "navigation_header_service_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_header_service_groups_locales_locale_parent_id_un" ON "navigation_header_service_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_header_specialist_services_order_idx" ON "navigation_header_specialist_services" USING btree ("order");
  CREATE INDEX "navigation_header_specialist_services_parent_idx" ON "navigation_header_specialist_services" USING btree ("parent_id");
  CREATE INDEX "navigation_header_links_order_idx" ON "navigation_header_links" USING btree ("_order");
  CREATE INDEX "navigation_header_links_parent_id_idx" ON "navigation_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_header_links_locales_locale_parent_id_unique" ON "navigation_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation_footer_explore_links_order_idx" ON "navigation_footer_explore_links" USING btree ("_order");
  CREATE INDEX "navigation_footer_explore_links_parent_id_idx" ON "navigation_footer_explore_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "navigation_footer_explore_links_locales_locale_parent_id_uni" ON "navigation_footer_explore_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "navigation__status_idx" ON "navigation" USING btree ("_status");
  CREATE UNIQUE INDEX "navigation_locales_locale_parent_id_unique" ON "navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_header_service_groups_services_order_idx" ON "_navigation_v_version_header_service_groups_services" USING btree ("order");
  CREATE INDEX "_navigation_v_version_header_service_groups_services_parent_idx" ON "_navigation_v_version_header_service_groups_services" USING btree ("parent_id");
  CREATE INDEX "_navigation_v_version_header_service_groups_order_idx" ON "_navigation_v_version_header_service_groups" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_header_service_groups_parent_id_idx" ON "_navigation_v_version_header_service_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_header_service_groups_locales_locale_p" ON "_navigation_v_version_header_service_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_header_specialist_services_order_idx" ON "_navigation_v_version_header_specialist_services" USING btree ("order");
  CREATE INDEX "_navigation_v_version_header_specialist_services_parent_idx" ON "_navigation_v_version_header_specialist_services" USING btree ("parent_id");
  CREATE INDEX "_navigation_v_version_header_links_order_idx" ON "_navigation_v_version_header_links" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_header_links_parent_id_idx" ON "_navigation_v_version_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_header_links_locales_locale_parent_id_" ON "_navigation_v_version_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_footer_explore_links_order_idx" ON "_navigation_v_version_footer_explore_links" USING btree ("_order");
  CREATE INDEX "_navigation_v_version_footer_explore_links_parent_id_idx" ON "_navigation_v_version_footer_explore_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_navigation_v_version_footer_explore_links_locales_locale_pa" ON "_navigation_v_version_footer_explore_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_navigation_v_version_version__status_idx" ON "_navigation_v" USING btree ("version__status");
  CREATE INDEX "_navigation_v_created_at_idx" ON "_navigation_v" USING btree ("created_at");
  CREATE INDEX "_navigation_v_updated_at_idx" ON "_navigation_v" USING btree ("updated_at");
  CREATE INDEX "_navigation_v_snapshot_idx" ON "_navigation_v" USING btree ("snapshot");
  CREATE INDEX "_navigation_v_published_locale_idx" ON "_navigation_v" USING btree ("published_locale");
  CREATE INDEX "_navigation_v_latest_idx" ON "_navigation_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_navigation_v_locales_locale_parent_id_unique" ON "_navigation_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_locales" CASCADE;
  DROP TABLE "navigation_header_service_groups_services" CASCADE;
  DROP TABLE "navigation_header_service_groups" CASCADE;
  DROP TABLE "navigation_header_service_groups_locales" CASCADE;
  DROP TABLE "navigation_header_specialist_services" CASCADE;
  DROP TABLE "navigation_header_links" CASCADE;
  DROP TABLE "navigation_header_links_locales" CASCADE;
  DROP TABLE "navigation_footer_explore_links" CASCADE;
  DROP TABLE "navigation_footer_explore_links_locales" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "navigation_locales" CASCADE;
  DROP TABLE "_navigation_v_version_header_service_groups_services" CASCADE;
  DROP TABLE "_navigation_v_version_header_service_groups" CASCADE;
  DROP TABLE "_navigation_v_version_header_service_groups_locales" CASCADE;
  DROP TABLE "_navigation_v_version_header_specialist_services" CASCADE;
  DROP TABLE "_navigation_v_version_header_links" CASCADE;
  DROP TABLE "_navigation_v_version_header_links_locales" CASCADE;
  DROP TABLE "_navigation_v_version_footer_explore_links" CASCADE;
  DROP TABLE "_navigation_v_version_footer_explore_links_locales" CASCADE;
  DROP TABLE "_navigation_v" CASCADE;
  DROP TABLE "_navigation_v_locales" CASCADE;
  ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE text;
  ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'editor'::text;
  DROP TYPE "public"."enum_users_role";
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'editor'::"public"."enum_users_role";
  ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE "public"."enum_users_role" USING "role"::"public"."enum_users_role";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_status";
  DROP TYPE "public"."enum__site_settings_v_published_locale";
  DROP TYPE "public"."enum_navigation_header_service_groups_services";
  DROP TYPE "public"."enum_navigation_header_specialist_services";
  DROP TYPE "public"."enum_navigation_header_links_route";
  DROP TYPE "public"."enum_navigation_footer_explore_links_route";
  DROP TYPE "public"."enum_navigation_status";
  DROP TYPE "public"."enum__navigation_v_version_header_service_groups_services";
  DROP TYPE "public"."enum__navigation_v_version_header_specialist_services";
  DROP TYPE "public"."enum__navigation_v_version_header_links_route";
  DROP TYPE "public"."enum__navigation_v_version_footer_explore_links_route";
  DROP TYPE "public"."enum__navigation_v_version_status";
  DROP TYPE "public"."enum__navigation_v_published_locale";`)
}
