# Generated by Django 4.1.1 on 2022-11-09 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("skill", "0001_initial"),
        ("certificate", "0002_alter_certificate_date_finished"),
        ("education", "0002_alter_education_date_finished"),
        ("addition_skill", "0001_initial"),
        ("timeframe", "0001_initial"),
        ("language", "0001_initial"),
        ("consultant", "0008_alter_consultant_city_alter_consultant_country_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="consultant",
            name="addition_skills",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="addition_skills",
                to="addition_skill.addition_skill",
            ),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="certificates",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="certificates",
                to="certificate.certificate",
            ),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="educations",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="educations",
                to="education.education",
            ),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="language_skills",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="language_skills",
                to="language.language",
            ),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="managed_certificates",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="managed_skills",
            field=models.ManyToManyField(
                blank=True, null=True, related_name="managed_skills", to="skill.skill"
            ),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="manager_display_name",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="manager_on_premises_user_principal_name",
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name="consultant",
            name="unavailable",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="unavailable",
                to="timeframe.timeframe",
            ),
        ),
    ]