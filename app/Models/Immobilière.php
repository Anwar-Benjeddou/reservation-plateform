<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Immobilière
 * 
 * @property int $id
 * @property string|null $matricule
 * @property string|null $addresse
 * @property string|null $description
 * @property bool|null $disponibilité
 * @property float|null $prix
 *
 * @package App\Models
 */
class Immobilière extends Model
{
	protected $table = 'immobilière';
	public $timestamps = false;

	protected $casts = [
		'disponibilité' => 'bool',
		'prix' => 'float'
	];

	protected $fillable = [
		'matricule',
		'addresse',
		'description',
		'disponibilité',
		'prix'
	];
}
