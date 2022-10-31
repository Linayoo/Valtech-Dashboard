from django.contrib import admin

from consultant.models import Consultant


@admin.register(Consultant)
class ConsultantAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('display_name', 'office_category', 'title')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('display_name', 'first_name', 'last_name', 'username')}),
        ('Location', {'fields': ('country', 'city', 'office_category')}),
        ('Contacts', {'fields': ('email', 'linked_in_link')}),
        ('Personal Details', {'fields': ('image_path', 'summary', 'is_subcontractor', 'is_active', 'is_disabled',
                                         'primary_language', 'title', 'role_category')}),
        (None, {'fields': ('manager_display_name', 'profile_id', 'profile_slug_id',
                           'manager_on_premises_user_principal_name')})
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'display_name', 'role_category')
    ordering = ('-id', )

