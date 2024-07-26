from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'number', 'email', 'role']

    def create(self, validated_data):
        validated_data['username'] = validated_data['email']
        return super().create(validated_data)