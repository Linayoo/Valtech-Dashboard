from django.contrib import admin
from language.models import Language


@admin.register(Language)
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
        (None, {'fields': ('title', 'level_category')})
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'title', 'level_category')
    ordering = ('-id', )
