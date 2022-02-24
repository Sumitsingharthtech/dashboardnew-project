import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import Equalizer from '@material-ui/icons/Equalizer';
import Adjust from '@material-ui/icons/Adjust';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// import Account from '@material-ui/icons/Account';



const icons = {
    NavigationOutlinedIcon: NavigationOutlinedIcon,
    Equalizer:Equalizer,
    Adjust:Adjust,
    AccountCircleIcon:AccountCircleIcon,

    
};

export default {
    items: [
        {
            id: 'navigation',
            title: 'Your Private Page',
            caption: 'Admin Panel',
            type: 'group',
            icon: icons['NavigationOutlinedIcon'],
            children: [
                {
                    id: 'dashboard',
                    title: 'Login',
                    type: 'item',
                    icon: icons['Equalizer'],
                    url: 'login',
                },
                {
                    id: 'dashboard',
                    title: 'User',
                    type: 'item',
                    icon: icons['Equalizer'],
                    url: 'user',
                },
                {
                    id: 'dashboard',
                    title: 'Post',
                    type: 'item',
                    icon: icons['Equalizer'],
                    url: 'post',
                },
                {
                    id: 'dashboard',
                    title: 'Profile',
                    type: 'item',
                    icon: icons['AccountCircleIcon'],
                    url: 'profile',
                },
                
            ],
        },     
    ],
};
