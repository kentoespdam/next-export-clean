import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@components/ui/sidebar";
import {
	BookmarkIcon,
	ChartColumnIcon,
	ChartLineIcon,
	CircleDollarSignIcon,
	DropletIcon,
	HomeIcon,
	LinkIcon,
	Maximize2Icon,
	UsersIcon,
} from "lucide-react";
import Link from "next/link";

const items = [
	{ title: "Dashboard", url: "/dashboard", icon: HomeIcon },
	{ title: "Pendapatan", url: "/dashboard/pendapatan", icon: ChartLineIcon },
	{ title: "Billing", url: "/dashboard/billing", icon: ChartColumnIcon },
	{ title: "Ikhtisar Tahunan", url: "/dashboard/ikhtisar_tahunan", icon: BookmarkIcon },
	{ title: "Angsuran", url: "/dashboard/angsuran", icon: LinkIcon },
	{ title: "Data Pelanggan", url: "/dashboard/data_pelanggan", icon: UsersIcon },
	{ title: "Detail Saldo", url: "/dashboard/detail_saldo", icon: CircleDollarSignIcon },
	{ title: "DRD", url: "/dashboard/drd", icon: Maximize2Icon },
	{ title: "Rekair", url: "/dashboard/rekair", icon: DropletIcon },
];

const AppSidebar = () => {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Main</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
};

export default AppSidebar;
