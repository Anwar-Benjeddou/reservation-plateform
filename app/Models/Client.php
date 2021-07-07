<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Client
 * 
 * @property int $id
 * @property string|null $full_name
 * @property string|null $address
 * @property string|null $phone
 * @property string|null $email
 *
 * @package App\Models
 */
class Client extends Model
{
	protected $table = 'client';
	public $timestamps = false;

	protected $fillable = [
		'full_name',
		'address',
		'phone',
		'email'
	];
}
