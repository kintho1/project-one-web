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
      menuItemFillSyles: 'fill-black'
    },
    { 
      menuItemText: "Facebook",
      menuItemLink: 'https://www.facebook.com/betfairaustralia',
      menuItemIcon: <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.4 0 0 5.41945 0 12.0432C0 17.3623 3.4 21.8785 8.2 23.4843C8.8 23.5846 9 23.1832 9 22.8821C9 22.581 9 21.8785 9 20.8749C5.7 21.5774 5 19.2692 5 19.2692C4.5 17.8641 3.7 17.4627 3.7 17.4627C2.6 16.7601 3.8 16.7602 3.8 16.7602C5 16.8605 5.6 17.9645 5.6 17.9645C6.7 19.771 8.4 19.2692 9.1 18.9681C9.2 18.1652 9.5 17.6634 9.9 17.3623C7.1 17.0612 4.3 16.0576 4.3 11.4411C4.3 10.1364 4.8 9.03242 5.5 8.22953C5.5 7.82809 5 6.62377 5.7 5.01801C5.7 5.01801 6.7 4.71693 9 6.22233C10 5.92125 11 5.82089 12 5.82089C13 5.82089 14 5.92125 15 6.22233C17.3 4.71693 18.3 5.01801 18.3 5.01801C19 6.72413 18.5 7.92845 18.4 8.22953C19.2 9.03242 19.6 10.1364 19.6 11.4411C19.6 16.0576 16.8 17.0612 14.1 17.3623C14.5 17.7638 14.9 18.4663 14.9 19.5702C14.9 21.176 14.9 22.4807 14.9 22.8821C14.9 23.1832 15.1 23.5846 15.7 23.4843C20.6 21.8785 24 17.3623 24 12.0432C24 5.41945 18.6 0 12 0Z"/>,
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
          <img width="102px" height="32px" src="/assets/AblyLogoWithText.svg" alt="AblyLogoWithText" />
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