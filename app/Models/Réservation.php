<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Réservation
 * 
 * @property int $id
 * @property int $client_ext_id
 * @property int $service_ext_id
 * @property Carbon|null $start_date
 * @property Carbon|null $end_date
 *
 * @package App\Models
 */
class Réservation extends Model
{
	protected $table = 'réservation';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id' => 'int',
		'client_ext_id' => 'int',
		'service_ext_id' => 'int'
	];

	protected $dates = [
		'start_date',
		'end_date'
	];

	protected $fillable = [
		'client_ext_id',
		'service_ext_id',
		'start_date',
		'end_date'
	];
}
