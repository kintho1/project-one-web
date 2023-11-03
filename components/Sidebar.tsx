import Image from 'next/image';
import FooterItem from "./FooterItem";
import MenuItem from "./MenuItem";
import SocialItem from "./SocialItem";

export default function Sidebar(props: { pageId: string; }) {

  const menuItems = [
    {
      menuItemId: "Home",
      menuItemText: "Home",
      menuItemActive: false,
      menuItemLink: '/'
    },
    {
      menuItemId: "Racing",
      menuItemText: "Racing",
      menuItemActive: false,
      menuItemLink: '/racing'
    },
    {
      menuItemId: "Authentication",
      menuItemText: "Authentication",
      menuItemActive: false,
      menuItemLink: '/authentication'
    },
    {
      menuItemId: "experttips",
      menuItemText: "Expert Tips",
      menuItemActive: false,
      menuItemLink: '/experttips'
    },
    {
      menuItemId: "PubSubChannels",
      menuItemText: "Pub/Sub Channels",
      menuItemActive: false,
      menuItemLink: '/pub-sub'
    },
    {
      menuItemId: "Presence",
      menuItemText: "Presence",
      menuItemActive: false,
      menuItemLink: '/presence'
    },
    {
      menuItemId: "History",
      menuItemText: "History",
      menuItemActive: false,
      menuItemLink: '/history'
    }
  ]

  const footerItems = [
    {
      menuItemText: "Betfair Australia Website",
      menuItemLink: 'https://www.betfair.com.au/exchange/plus/'
    },
    {
      menuItemText: "Betfair - The Hub",
      menuItemLink: 'https://www.betfair.com.au/hub/'
    },

  ];

  const socialItems = [
    {
      menuItemText: "X (Twitter)",
      menuItemLink: 'https://twitter.com/Betfair_Aus',
      menuItemIcon: <path fillRule="evenodd" clipRule="evenodd" d="M17.7286 2H20.9857L13.8699 10.1329L22.2411 21.2H15.6865L10.5527 14.4879L4.67852 21.2H1.41945L9.03052 12.501L1 2H7.72098L12.3615 8.13514L17.7286 2ZM16.5855 19.2505H18.3903L6.74031 3.84714H4.80357L16.5855 19.2505Z"/>,
      menuItemFillSyles: 'fill-black hover:fill'
    },
    {
      menuItemText: "Facebook",
      menuItemLink: 'https://www.facebook.com/betfairaustralia',
      menuItemIcon: <path fillRule="evenodd" clipRule="evenodd" d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406
      C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914
      c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643
      h2.516V4.458z"/>,
      menuItemFillSyles: 'fill-black'
    },
    {
      menuItemText: "LinkedIn",
      menuItemLink: 'https://www.linkedin.com/company/betfair-australia',
      menuItemIcon: <path fillRule="evenodd" clipRule="evenodd" d="M24 1.76471V22.2353C24 22.7033 23.8141 23.1522 23.4831 23.4831C23.1522 23.8141 22.7033 24 22.2353 24H1.76471C1.29668 24 0.847817 23.8141 0.51687 23.4831C0.185924 23.1522 0 22.7033 0 22.2353L0 1.76471C0 1.29668 0.185924 0.847817 0.51687 0.51687C0.847817 0.185924 1.29668 0 1.76471 0L22.2353 0C22.7033 0 23.1522 0.185924 23.4831 0.51687C23.8141 0.847817 24 1.29668 24 1.76471ZM7.05882 9.17647H3.52941V20.4706H7.05882V9.17647ZM7.37647 5.29412C7.37833 5.02715 7.32759 4.76242 7.22714 4.51506C7.12669 4.2677 6.9785 4.04255 6.79103 3.85246C6.60357 3.66237 6.38049 3.51107 6.13455 3.4072C5.88861 3.30332 5.62462 3.24891 5.35765 3.24706H5.29412C4.7512 3.24706 4.23053 3.46273 3.84663 3.84663C3.46273 4.23053 3.24706 4.7512 3.24706 5.29412C3.24706 5.83703 3.46273 6.35771 3.84663 6.74161C4.23053 7.1255 4.7512 7.34118 5.29412 7.34118C5.56111 7.34774 5.82678 7.30164 6.07594 7.2055C6.32511 7.10936 6.55289 6.96506 6.74627 6.78086C6.93965 6.59666 7.09484 6.37616 7.20297 6.13196C7.3111 5.88775 7.37006 5.62464 7.37647 5.35765V5.29412ZM20.4706 13.6094C20.4706 10.2141 18.3106 8.89412 16.1647 8.89412C15.4621 8.85894 14.7626 9.00858 14.1358 9.32814C13.5091 9.64769 12.9771 10.126 12.5929 10.7153H12.4941V9.17647H9.17647V20.4706H12.7059V14.4635C12.6549 13.8483 12.8487 13.2378 13.2452 12.7646C13.6417 12.2915 14.2089 11.9939 14.8235 11.9365H14.9576C16.08 11.9365 16.9129 12.6424 16.9129 14.4212V20.4706H20.4424L20.4706 13.6094Z"/>,
      menuItemFillSyles: 'fill-black hover:fill-linkedin'
    },

  ];

  return(
    <div className="flex flex-col max-w-[328px] min-w-[268px] justify-between items-start gap-6 pt-6 pr-6 pb-6 pl-6 rounded-2xl border-slate-100 border-t border-b border-l border-r border-solid border bg-slate-50">
      <div className="flex flex-col justify-start items-start gap-6">
          <img width="102px" height="102px" src="/assets/betfair_arrow_logo.svg" alt="BFArrows" />
          <div className="flex flex-col justify-start items-start">
          {menuItems.map(
              ({
                menuItemId,
                menuItemText,
                menuItemLink
              }) => (
              <MenuItem
                  key={menuItemId}
                  menuItemText={menuItemText}
                  menuItemActive={(menuItemId==props.pageId) ? true : false}
                  menuItemLink={menuItemLink}
              />
              )
          )}
          </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-6">
          <img width="272px" height="1px" src="/assets/HorizontalRule.svg" alt="Rule" />
          <div className="flex flex-col justify-start items-start">
          {footerItems.map(({ menuItemText, menuItemLink }) => (
              <FooterItem key={menuItemText} menuItemText={menuItemText} menuItemLink={menuItemLink} />
          ))}
          </div>
          <img width="272px" height="1px" src="/assets/HorizontalRule.svg" alt="Rule" />
          <div className="flex flex-row justify-start items-center gap-6">
          {socialItems.map(
              ({
                menuItemText,
                menuItemIcon,
                menuItemLink,
                menuItemFillSyles
              }) => (
              <SocialItem
                  key={menuItemText}
                  menuItemIconSource={menuItemIcon}
                  menuItemLink={menuItemLink}
                  menuItemFillSyles={menuItemFillSyles}
              />
              )
          )}

          </div>
      </div>
    </div>
  )
}