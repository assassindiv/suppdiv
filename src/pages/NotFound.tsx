import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="text-center space-y-6">
      <h1 className="text-8xl font-bold font-mono text-primary/20">404</h1>
      <p className="text-xl text-muted-foreground">Page not found</p>
      <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-mono text-sm">
        <ArrowLeft className="size-4" />
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
