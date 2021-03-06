<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Salary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SalaryController extends Controller
{

    public function allSalary()
    {
        $allsalary = Salary::select('salary_month')->groupBy('salary_month')->get();
        return response()->json($allsalary);
    }


    public function paid(Request $request, $id)
    {
        $validateData = $request->validate([
            
            'salary_month' => 'required',
        ]);
        $month = $request->salary_month;

        $check = Salary::where('employee_id',$id)->where('salary_month',$month)->first();

        if ($check) {
            return response()->json('Salary Already Paid');
        }else{

            $salary = new Salary();
            $salary->employee_id = $id;
            $salary->amount = $request->salary;
            $salary->salary_date = date('d-m-y');
            $salary->salary_month = $month;
            $salary->salary_year = date('Y');
            $salary->save();
        }
    }

    public function viewSalary($id)
    {
        $month = $id;
        $view = DB::table('salaries')
                ->join('employees','salaries.employee_id','employees.id')
                ->select('employees.name','salaries.*')->where('salaries.salary_month',$month)->get();
                return response()->json($view);
        
    }

    public function editSalary($id)
    {
        $view = DB::table('salaries')
                ->join('employees','salaries.employee_id','employees.id')
                ->select('employees.name','employees.email','salaries.*')->where('salaries.id',$id)->first();
                return response()->json($view);
    }

    public function updateSalary(Request $request, $id)
    {
        $salary = Salary::findOrFail($id);
        $salary->employee_id = $request->employee_id;;
        $salary->amount = $request->amount;
        $salary->salary_month = $request->salary_month;
        $salary->save();
    }
}
