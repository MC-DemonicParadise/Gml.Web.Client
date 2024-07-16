export const BRAND_NAME = "Demonic";
export const PLATFORM_SHORT_APP_NAME = "Launcher";
export const PLATFORM_APP_NAME = `${BRAND_NAME} ${PLATFORM_SHORT_APP_NAME}`;

type Config = {
  name: string;
};

export const config: Config = {
  name: PLATFORM_APP_NAME,
};
