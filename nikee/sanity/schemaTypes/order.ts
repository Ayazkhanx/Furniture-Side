

export default {
    name: 'order',
    type: 'document',
    title: 'order',
    fields: [
        {
        name: 'name',
        title: 'name',
        type: 'string',
    },
    {
        name: 'email',
        title: 'email',
        type: 'email',
    },
    {
        name: 'address',
        title: 'address',
        type: 'string',
    },
    {
        name: 'phone',
        title: 'phone',
        type: 'number',
    },
    {
        name: 'discount',
        title: 'discount',
        type: 'number',
    },
    {
        name: 'city',
        title: 'city',
        type: 'string',
    },
    {
        name: 'postalcode',
        title: 'postal code',
        type: 'string',
    },
    {
        name: 'cartItems',
        title: 'cartItems',
        type: 'array',
        of: [ {type: 'reference', to: { type: 'product' }}]
    },
    {
        name: 'total',
        title: 'total',
        type: 'number',
    },
    {
        name: 'status',
        title: 'Order status',
        type: 'string',
        options : {
            list : [
                { value: 'pending', label: 'Pending' },
                { value: 'shipped', label: 'Shipped' },
                { value: 'delivered', label: 'Delivered' },
            ],
            layout: 'radio'
        },
        initialValue: 'pending'
    }
]
}