class LinksManager {
    public static readonly inst = new LinksManager();

    public static readonly TRAILER_LINK = "https://www.youtube.com/watch?v=Zl3jHVbDxws";
    public static readonly APP_STORE = "https://apps.apple.com/app/id6499560058";

    private constructor() {}

    public openLink(link: string) {
        window.open(link, "_blank");
    }
}

export default LinksManager;
