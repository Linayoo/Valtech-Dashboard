from django.contrib import admin
from education.models import Education


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('title', 'school', 'date_finished')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('title', 'school', 'date_finished')}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'title', 'school', 'date_finished')
    ordering = ('-id', )
