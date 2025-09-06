import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { User, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const isProfileRoute = location.pathname === '/profile';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  if (isProfileRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-eco-sage/20 p-4">
        <Card className="w-full max-w-md shadow-lg border-eco-green/20 eco-card">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-eco-light rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-eco-green" />
            </div>
            <CardTitle className="text-2xl font-bold text-eco-forest">
              Guest Mode
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              You are currently in guest mode. Please login or register to access your profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/login">
              <Button 
                variant="outline"
                size="lg"
                className="w-full"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                variant="eco"
                size="lg"
                className="w-full"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
