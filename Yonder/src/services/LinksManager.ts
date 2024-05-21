class LinksManager {
    public static readonly inst = new LinksManager();

    public static readonly TRAILER_LINK = "https://www.youtube.com/watch?v=Zl3jHVbDxws";
    public static readonly APP_STORE = "https://testflight.apple.com/join/s8rhNhBa";

    private constructor() {}

    public openLink(link: string) {
        window.open(link, "_blank");
    }
}

export default LinksManager;
