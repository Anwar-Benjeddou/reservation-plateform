<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Véhicule
 * 
 * @property int $id
 * @property string|null $matricule
 * @property bool|null $disponibilité
 * @property float|null $prix
 *
 * @package App\Models
 */
class Véhicule extends Model
{
	protected $table = 'véhicules';
	public $timestamps = false;

	protected $casts = [
		'disponibilité' => 'bool',
		'prix' => 'float'
	];

	protected $fillable = [
		'matricule',
		'disponibilité',
		'prix'
	];
}
