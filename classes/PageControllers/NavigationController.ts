import { Page, PageControllerInternal } from "../../../official-generic-layout/classes/PageController";

export class NavigationController
{
    private static internal: PageControllerInternal = new PageControllerInternal();

    public static GetPages(): Page[]
    {
        return this.internal.GetPages();
    }

    // When a Page is registered, it is treated like the root here.
    //  Root doesn't necessary become `/`
    //  Root is located where generic page home page is located.
    public static RegisterPage(_page: Page, _insert: number = -1)
    {
        this.internal.RegisterPage(_page, _insert);
    }
}