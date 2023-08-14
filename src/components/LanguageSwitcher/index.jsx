import { Avatar, Dropdown, Typography } from "antd"
const Text = Typography.Text
// eslint-disable-next-line react/prop-types
function LanguageSwitcher({lang, languages, onClick}) {
    function getFlag(lang) {
        // input: lang --> String
        // return ReactNode that shows country flags
        return <Avatar size={24} shape="circle" 
                src={`${lang}-24.png`}/>
    }
    // eslint-disable-next-line react/prop-types
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang)
    }))
    // eslint-disable-next-line react/prop-types
    const selectedLang = languages.find(item => item.lang === lang)
    /*
    languages = [{
        key: 'vi',
        label: "",
    }]
    */
    return (<div className="LanguageSwitcher">
        <Dropdown menu={{
                items: menuItems,
                onClick: ({key}) => onClick(key)
            }}>
            <div style={{cursor: "pointer"}}>
                <Avatar size={28} shape="circle" 
                    style={{
                        marginRight: 10, 
                       // border: '1px solid blue',
                        transform: 'translateY(0px)'
                    }}
                    src={`${lang}-24.png`} />
                <Text style={{
                    display: 'inline-block',
                    width: '2em',
                }}>{selectedLang.label}</Text>
            </div>
        </Dropdown>
    </div>)
}
export default LanguageSwitcher