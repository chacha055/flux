<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('marchandises', function (Blueprint $table) {
            $table->id();
            $table->string('Description');
            $table->integer('Quantite');
            $table->integer('Valeur');
            $table->string('Origine');
            $table->string('DocumentsAssocies');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marchandises');
    }
};
