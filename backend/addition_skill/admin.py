from django.contrib import admin
from addition_skill.models import Addition_skill


@admin.register(Addition_skill)
class AdditionSkillAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('title')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': 'title'}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'title')
    ordering = ('-id', )


