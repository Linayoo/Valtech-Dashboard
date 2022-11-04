from django.contrib import admin
from certificate.models import Certificate


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('title', 'institution', 'date_finished')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('title', 'institution', 'date_finished')}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'title')
    ordering = ('-id', )


