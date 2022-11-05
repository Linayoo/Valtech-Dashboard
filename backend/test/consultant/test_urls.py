from django.test import SimpleTestCase
from django.urls import reverse, resolve


class TestConsultantUrls(SimpleTestCase):

    def test_get_all_consultants_is_resolved(self):
        url = reverse('get_all_consultants')
        resolver = resolve(url)
        self.assertEqual(resolver.view_name, 'get_all_consultants')

    def test_create_consultants_is_resolved(self):
        url = reverse('create_consultants')
        resolver = resolve(url)
        self.assertEqual(resolver.view_name, 'create_consultants')

    def test_get_patch_delete_consultants_is_resolved(self):
        random_number = '1'  # <int:id> from url
        url = reverse('get_patch_delete_consultants', args=random_number)
        resolver = resolve(url)
        self.assertEqual(resolver.view_name, 'get_patch_delete_consultants')

    def test_search_consultants_is_resolved(self):
        url = reverse('search_consultants')
        resolver = resolve(url)
        self.assertEqual(resolver.view_name, 'search_consultants')
