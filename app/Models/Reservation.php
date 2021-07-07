<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Reservation
 * 
 * @property int $id
 * @property string|null $first_name
 * @property string|null $last_name
 * @property string|null $client_type
 * @property string|null $description
 * @property Carbon|null $date_from
 * @property int|null $duration
 * @property float|null $budget_from
 * @property float|null $budget_to
 * @property string|null $phone
 * @property string|null $email
 * @property bool|null $transport_include
 *
 * @package App\Models
 */
class Reservation extends Model
{
	protected $table = 'reservations';
	public $timestamps = false;

	protected $casts = [
		'duration' => 'int',
		'budget_from' => 'float',
		'budget_to' => 'float',
		'transport_include' => 'bool'
	];

	protected $dates = [
		'date_from'
	];

	protected $fillable = [
		'first_name',
		'last_name',
		'client_type',
		'description',
		'date_from',
		'duration',
		'budget_from',
		'budget_to',
		'phone',
		'email',
		'transport_include'
	];
}
