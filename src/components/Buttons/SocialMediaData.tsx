import * as TiIcons from 'react-icons/io5';

interface Items {
	title: string;
	path: string;
	icon: JSX.Element;
	styleClass: string;
}

export const Data: Items[] = [
	{
		title: 'LinkedIn',
		path: 'https://www.linkedin.com/in/carlos-jonatan-bordon/',
		icon: <TiIcons.IoLogoLinkedin />,
		styleClass: 'icon icon-linkedin',
	},
	{
		title: 'Git Hub',
		path: 'https://github.com/YonaBordon',
		icon: <TiIcons.IoLogoGithub />,
		styleClass: 'icon icon-github',
	},
];
