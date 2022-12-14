# Generated by Django 4.1 on 2022-10-31 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("addition_skill", "0001_initial"),
        ("user_project", "0001_initial"),
        ("certificate", "0001_initial"),
        ("language", "0001_initial"),
        ("education", "0001_initial"),
        ("skill", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Consultant",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("display_name", models.CharField(max_length=100)),
                ("first_name", models.CharField(max_length=100)),
                ("last_name", models.CharField(max_length=100)),
                ("username", models.CharField(max_length=100)),
                ("country", models.CharField(max_length=100)),
                ("city", models.CharField(max_length=100)),
                (
                    "office_category",
                    models.CharField(
                        choices=[
                            ("Baden", "Baden"),
                            ("Bern", "Bern"),
                            ("Geneva", "Geneva"),
                        ],
                        max_length=100,
                    ),
                ),
                ("email", models.EmailField(max_length=254)),
                ("linked_in_link", models.URLField()),
                ("image_path", models.FileField(blank=True, upload_to="uploads/")),
                ("summary", models.TextField()),
                ("is_subcontractor", models.BooleanField(default=False)),
                ("is_active", models.BooleanField(default=True)),
                ("is_disabled", models.BooleanField(default=False)),
                ("primary_language", models.CharField(max_length=100)),
                ("managed_certificates", models.CharField(max_length=250)),
                ("title", models.CharField(max_length=200)),
                ("edited_time", models.DateTimeField(auto_now=True)),
                ("manager_display_name", models.CharField(max_length=100)),
                ("profile_id", models.IntegerField()),
                ("profile_slug_id", models.IntegerField()),
                (
                    "manager_on_premises_user_principal_name",
                    models.CharField(max_length=250),
                ),
                (
                    "role_category",
                    models.CharField(
                        choices=[
                            ("frontend", "Frontend Developer"),
                            ("backend", "Backend Developer"),
                            ("devops", "DevOps Developer"),
                            ("fullstack", "Fullstack Developer"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "addition_skills",
                    models.ManyToManyField(
                        related_name="addition_skills",
                        to="addition_skill.addition_skill",
                    ),
                ),
                (
                    "certificates",
                    models.ManyToManyField(
                        related_name="certificates", to="certificate.certificate"
                    ),
                ),
                (
                    "educations",
                    models.ManyToManyField(
                        related_name="educations", to="education.education"
                    ),
                ),
                (
                    "language_skills",
                    models.ManyToManyField(
                        related_name="language_skills", to="language.language"
                    ),
                ),
                (
                    "managed_skills",
                    models.ManyToManyField(
                        related_name="managed_skills", to="skill.skill"
                    ),
                ),
                (
                    "projects",
                    models.ManyToManyField(
                        blank=True,
                        related_name="projects",
                        to="user_project.user_project",
                    ),
                ),
            ],
        ),
    ]
