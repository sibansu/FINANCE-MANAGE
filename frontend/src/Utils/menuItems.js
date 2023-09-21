import { dashboard, expenses, incomes, transaction } from "./icons";

export const menuItems=[
    {
        id:'1',
        title: 'Dashboard',
        icon: dashboard,
        link:'/dashboard'
    },
    {
        id:'2',
        title: 'View transactions',
        icon:transaction,
        link:'/dashboard'
    },
    {
        id:'3',
        title: 'Incomes',
        icon: incomes,
        link:'/dashboard'
    },
    {
        id:'4',
        title: 'Expenses',
        icon: expenses,
        link:'/dashboard'
    },
]