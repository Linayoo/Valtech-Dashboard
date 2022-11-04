from django.contrib import admin
from timeframe.models import TimeFrame


@admin.register(TimeFrame)
class TimeFrameAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('date_started', 'date_finished')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('date_started', 'date_finished')}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'date_started', 'date_finished')
    ordering = ('-id', )

