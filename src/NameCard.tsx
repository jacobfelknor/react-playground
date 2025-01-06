export default function NameCard(
    { showName, name, btnClickCount: btnThreeCount = 0 }: { showName: boolean, name: string, btnClickCount: number }
) {
    if (showName) {
        return <>
            {btnThreeCount < 5 && "Showing name: "}
            {btnThreeCount < 5 ? name : "Stop Clicking..."}
        </>
    } else {
        return ""
    }
}