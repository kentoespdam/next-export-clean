import ThemeProviderComponent from "../../components/template";
import ContentComponent from "../../components/template/content.component";
import HeaderComponent from "../../components/template/header";
import MenuDrawerComponent from "../../components/template/menu.drawer";
import { IChildrenNode } from "../layout";

const Layout = async ({ children }: IChildrenNode) => {
	return (
		<ThemeProviderComponent>
			<HeaderComponent />
			<MenuDrawerComponent />
			<ContentComponent>{children}</ContentComponent>
		</ThemeProviderComponent>
	);
};

export default Layout;
