from django.test import SimpleTestCase
from django.urls import reverse, resolve

from consultant.views import GetAllConsultants, CreateConsultant, RetrievePatchDeleteConsultant, SearchConsultant


class TestConsultantUrls(SimpleTestCase):

    def test_get_all_consultants_is_resolved(self):
        url = reverse('get_all_consultants')
        self.assertEqual(resolve(url).func.view_class, GetAllConsultants)

    def test_create_consultants_is_resolved(self):
        url = reverse('create_consultants')
        self.assertEqual(resolve(url).func.view_class, CreateConsultant)

    def test_get_patch_delete_consultants_is_resolved(self):
        random_number = '1'  # <int:id> from url
        url = reverse('get_patch_delete_consultants', args=[random_number])
        self.assertEqual(resolve(url).func.view_class, RetrievePatchDeleteConsultant)

    def test_search_consultants_is_resolved(self):
        url = reverse('search_consultants')
        self.assertEqual(resolve(url).func.view_class, SearchConsultant)
