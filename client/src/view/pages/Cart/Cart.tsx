import {RootState} from "../../redux/Store/Store";
import {useSelector} from "react-redux";
import {useEffect} from "react";

export function Cart() {
    const items = useSelector((state: RootState) => state.cart.items);

    return (
        <div className="max-w-[1240px] mx-auto px-10 py-7">
            <h1 className="text-4xl font-light mb-6">Cart</h1>
            <div className="overflow-x-auto rounded-t-2xl ">
                <table className="min-w-full divide-gray-200 bg-white shadow-md rounded-lg rounded-t-2xl ">
                    <thead className="bg-primary rounded-t-2xl ">
                    <tr>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Price</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-6 text-left text-xs font-medium text-white uppercase tracking-wider">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img src={require(`../../../images/product/${item.image}`)} className="w-10 h-10 object-cover rounded" alt={item.title}/>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qty}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${(item.qty * item.price).toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}