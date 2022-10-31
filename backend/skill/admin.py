from django.contrib import admin
from language.models import Language
from skill.models import Skill


@admin.register(Skill)
class LanguageAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('title', 'level_category')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('title', 'category')})
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'title', 'category')
    ordering = ('-id', )

