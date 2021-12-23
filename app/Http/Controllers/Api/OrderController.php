<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function todayOrder()
    {
        $date = date('d/m/Y');
        $orderData = DB::table('orders')
                ->join('customers','orders.customer_id','customers.id')
                ->where('order_date',$date)
                ->select('customers.name','orders.*')
                ->orderBy('orders.id','DESC')->get();
                
        return response()->json($orderData);
    }
}
