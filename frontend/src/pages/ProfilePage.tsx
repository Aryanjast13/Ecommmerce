

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUserStore } from "@/stores/useUserStore";
import {
  Edit,
  MapPin,
  Save
} from "lucide-react";
import { useState } from "react";

interface data {
  fullName: string;
  address: string;
}

export default function ProfilePage() {
  const {user,editPofile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<data>({
    fullName:user?.name as string,
    address:user?.address as string,
  });


 

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  

  const handleSave = () => {
    setIsEditing(false);
    editPofile(profileData.fullName, profileData.address);

    // Here you would typically save to backend
    console.log("Profile saved:", profileData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <Avatar className="w-24 h-24 md:w-32 md:h-32">
                <AvatarImage
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile picture"
                />
                <AvatarFallback className="text-2xl">
                  {profileData.fullName[0]}
                  
                </AvatarFallback>
              </Avatar>
              
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {user?.name} 
              </h1>
              <p className="text-gray-600 mb-4">{ user?.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSave}
                    className="flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save Changes
                  </Button>
                  <Button variant="outline"  className="text-five" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Tabs */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal">
            <Card className="p-3">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      className="text-five"
                      id="fullName"
                      value={profileData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <Input
                      id="address"
                      type="text"
                      value={profileData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
              
              </CardContent>
            </Card>
          </TabsContent>

         
          </Tabs>

          </div>

         
      </div>
  );
}
