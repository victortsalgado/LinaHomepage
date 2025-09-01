import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/hooks/use-scroll-to-top";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import DataLink from "@/pages/data-link";
import LinaPay from "@/pages/lina-pay";
import JSR from "@/pages/jsr";
import QuemSomos from "@/pages/quem-somos";
import Contato from "@/pages/contato";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog/[slug]";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/data-link" component={DataLink} />
      <Route path="/lina-pay" component={LinaPay} />
      <Route path="/jsr" component={JSR} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/contato" component={Contato} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
