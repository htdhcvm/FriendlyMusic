CREATE TABLE "Groups" (
	"id" serial NOT NULL,
	"socialId" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"experience" VARCHAR(255) NOT NULL,
	"address" VARCHAR(255) NOT NULL,
	"telephone" VARCHAR(255) NOT NULL,
	"typeGroup" VARCHAR(255) NOT NULL,
	"musicalGenre" VARCHAR(255) NOT NULL,
	"repetitionBase" BOOLEAN NOT NULL,
	"commerceProject" BOOLEAN NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	CONSTRAINT "Groups_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Users" (
	"id" serial NOT NULL,
	"groupId" integer NOT NULL,
	"fio" VARCHAR(255) NOT NULL,
	"dateBirthday" DATE NOT NULL,
	"gander" VARCHAR(255) NOT NULL,
	"telephone" VARCHAR(255) NOT NULL,
	"address" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"site" VARCHAR(255) NOT NULL,
	"profession" VARCHAR(255) NOT NULL,
	"experience" VARCHAR(255) NOT NULL,
	"musicInstrument" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"skills" VARCHAR(255) NOT NULL,
	"quality" VARCHAR(255) NOT NULL,
	"socialId" integer NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Vacancies" (
	"id" serial NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"profession" VARCHAR(255) NOT NULL,
	"experience" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"skills" VARCHAR(255) NOT NULL,
	"quality" VARCHAR(255) NOT NULL,
	"requirement" VARCHAR(255) NOT NULL,
	"responsibility" VARCHAR(255) NOT NULL,
	"willPlus" VARCHAR(255) NOT NULL,
	"offer" VARCHAR(255) NOT NULL,
	"condition" VARCHAR(255) NOT NULL,
	CONSTRAINT "Vacancies_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Resumes" (
	"id" serial NOT NULL,
	"avatar" VARCHAR(255) NOT NULL,
	"title" VARCHAR(255) NOT NULL,
	"salary" integer NOT NULL,
	"language" VARCHAR(255) NOT NULL,
	CONSTRAINT "Resumes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "PlaceWorks" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"position" VARCHAR(255) NOT NULL,
	"link" VARCHAR(255) NOT NULL,
	"dateScopeId" integer NOT NULL,
	CONSTRAINT "PlaceWorks_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "University" (
	"id" serial NOT NULL,
	"useId" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"nameFuclty" VARCHAR(255) NOT NULL,
	"qualification" VARCHAR(255) NOT NULL,
	"dateScopeId" integer NOT NULL,
	CONSTRAINT "University_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Courses" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"nameSchool" BINARY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"dateScopeId" integer NOT NULL,
	CONSTRAINT "Courses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Group_Vacancys" (
	"id" serial NOT NULL,
	"groupId" integer NOT NULL,
	"vacancyId" integer NOT NULL,
	CONSTRAINT "Group_Vacancys_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "User_Resumes" (
	"id" serial NOT NULL,
	"userId" integer NOT NULL,
	"resumeId" integer NOT NULL,
	CONSTRAINT "User_Resumes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Socials" (
	"id" serial NOT NULL,
	"type" VARCHAR(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	CONSTRAINT "Socials_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "DateScopes" (
	"id" serial NOT NULL,
	"start" DATE NOT NULL,
	"end" DATE NOT NULL,
	CONSTRAINT "DateScopes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Groups" ADD CONSTRAINT "Groups_fk0" FOREIGN KEY ("socialId") REFERENCES "Socials"("id");

ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("groupId") REFERENCES "Groups"("id");
ALTER TABLE "Users" ADD CONSTRAINT "Users_fk1" FOREIGN KEY ("socialId") REFERENCES "Socials"("id");



ALTER TABLE "PlaceWorks" ADD CONSTRAINT "PlaceWorks_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("id");
ALTER TABLE "PlaceWorks" ADD CONSTRAINT "PlaceWorks_fk1" FOREIGN KEY ("dateScopeId") REFERENCES "DateScopes"("id");

ALTER TABLE "University" ADD CONSTRAINT "University_fk0" FOREIGN KEY ("useId") REFERENCES "Users"("id");
ALTER TABLE "University" ADD CONSTRAINT "University_fk1" FOREIGN KEY ("dateScopeId") REFERENCES "DateScopes"("id");

ALTER TABLE "Courses" ADD CONSTRAINT "Courses_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("id");
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_fk1" FOREIGN KEY ("dateScopeId") REFERENCES "DateScopes"("id");

ALTER TABLE "Group_Vacancys" ADD CONSTRAINT "Group_Vacancys_fk0" FOREIGN KEY ("groupId") REFERENCES "Groups"("id");
ALTER TABLE "Group_Vacancys" ADD CONSTRAINT "Group_Vacancys_fk1" FOREIGN KEY ("vacancyId") REFERENCES "Vacancies"("id");

ALTER TABLE "User_Resumes" ADD CONSTRAINT "User_Resumes_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("id");
ALTER TABLE "User_Resumes" ADD CONSTRAINT "User_Resumes_fk1" FOREIGN KEY ("resumeId") REFERENCES "Resumes"("id");


