import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusFC} from "./ProfileStatusFC";
import {spawn} from "child_process";

describe('ProfileStatus component', () => {

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus userStatus={"it-kamasutra"} updateUserStatus={() => {}} /> )
        const instance = component.getInstance()
        //@ts-ignore
        expect(instance.state.status).toBe('it-kamasutra')
    })

    test('after creation <span> should be displayed', () => {
        const component = create(<ProfileStatus userStatus={"it-kamasutra"} updateUserStatus={() => {}} /> )
        const root = component.root
        //const root = component.getInstance();
        let span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <input> should't be disptayed", () => {
        const component = create(<ProfileStatus userStatus={'it-kamasutra'} updateUserStatus={() => {}} />)
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    } )

    test('after creation <span> should contains correct status', () => {
        const component = create(<ProfileStatus userStatus={"it-kamasutra"} updateUserStatus={() => {}} /> )
        const root = component.root
        //const root = component.getInstance();
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra")
    })

    test('input should be displayed after doubleclick <span>', () => {
        const component = create(<ProfileStatus userStatus={"it-kamasutra"} updateUserStatus={() => {}} /> )
        const root = component.root
        //const root = component.getInstance();
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe("it-kamasutra")
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus userStatus={"it-kamasutra"} updateUserStatus={mockCallback} /> )
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})