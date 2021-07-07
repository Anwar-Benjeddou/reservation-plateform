<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class évènement
 * 
 * @property int $id
 * @property string|null $type
 * @property string|null $description
 * @property int|null $localisation
 *
 * @package App\Models
 */
class évènement extends Model
{
	protected $table = 'évènement';
	public $timestamps = false;

	protected $casts = [
		'localisation' => 'int'
	];

	protected $fillable = [
		'type',
		'description',
		'localisation'
	];
}
