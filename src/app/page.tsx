// Root page for chispito-primaria-baja micro-frontend
// Redirects to primaria-1 as the default grade
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/primaria-1");
}
