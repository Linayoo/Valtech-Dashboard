from django.contrib import admin
from user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('first_name', 'last_name', 'username', 'password', 'password2')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('first_name', 'last_name', 'username')}),
        ('Location', {'fields': ('country', 'city', 'office_category')}),
        ('Contacts', {'fields': 'email'}),
        ('Personal Details', {'fields': 'image'}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'first_name', 'last_name')
    ordering = ('-id', )
