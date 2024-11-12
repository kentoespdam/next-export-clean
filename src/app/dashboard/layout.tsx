import AppSidebar from "@components/template/app-sidebar";
import TopBarTemplate from "@components/template/topbar";
import { SidebarProvider } from "@components/ui/sidebar";
import { auth } from "@src/auth";
import Unauthorized from "@src/components/template/unauthorized";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	return (
		<SidebarProvider>
			<AppSidebar />
			<div className="w-full">
				<TopBarTemplate session={session} />
				<main className="m-5">{!session ? <Unauthorized /> : children}</main>
			</div>
		</SidebarProvider>
	);
};

export default DashboardLayout;
